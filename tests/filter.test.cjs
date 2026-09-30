// Run with: node --test tests/filter.test.cjs
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { resolve } = require('node:path');
const vm = require('node:vm');

// Exercise the page's actual conversion functions without a browser or dependencies.
const html = readFileSync(resolve(__dirname, '../fun/filter/index.html'), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const pureCode = script.slice(0, script.indexOf('const forms ='));
function converter(intl = Intl) {
 const context = vm.createContext({ Intl: intl });
 vm.runInContext(pureCode, context);
 return (text, mode, keepSpace = false) => {
  context.input = { text, mode, keepSpace };
  return JSON.parse(vm.runInContext('JSON.stringify(transformText(input.text, input.mode, input.keepSpace))', context));
 };
}
const transform = converter();

test('ASCII em dash matches the confirmed reference output', () => {
 assert.equal(transform('one—two', 'ascii').output, 'one--two');
 assert.equal(transform('— —', 'ascii').output, '-- --');
 assert.equal(transform('a-b–c—d', 'ascii').output, 'a-b-c--d');
 assert.equal(transform('Crème brûlée — œuf', 'ascii').output, 'Creme brulee -- oeuf');
});

test('expansion highlights only the em dash and leaves following text aligned', () => {
 const result = transform('A—B', 'ascii');
 assert.deepEqual(result.spans, [
  {before:'A', after:'A', changed:false},
  {before:'—', after:'--', changed:true},
  {before:'B', after:'B', changed:false},
 ]);
 assert.equal(result.unmapped, 0);
 assert.equal(result.spans.map(span => span.after).join(''), result.output);
});

test('other modes retain their distinct em-dash behavior', () => {
 for (const mode of ['removeAccents', 'keepSpecial', 'keepNonLatin', 'keepNonLetterDigit']) {
  assert.equal(transform('—', mode).output, '—', mode);
 }
 assert.equal(transform('—', 'unicode').output, '\\u2014');
 assert.equal(transform('—', 'alnum').output, '');
});

test('existing offline conversion rules remain stable', () => {
 const cases = [
  ['Été œ ß Ł “hi”…', 'ascii', false, 'Ete oe ss L "hi"...'],
  ['ＡＢＣ ① ﬃ', 'ascii', false, 'ABC 1 ffi'],
  ['e\u0301 É ø ł 😀', 'removeAccents', false, 'e E ø ł 😀'],
  ['Aé😀!', 'unicode', false, 'A\\u00e9\\ud83d\\ude00!'],
  ['a A1 é\t\n\u00a0!', 'alnum', false, 'aA1'],
  ['a A1 é\t\n\u00a0!', 'alnum', true, 'a A1 '],
  ['aé😀!\n', 'keepSpecial', false, 'é😀'],
  ['aA1é 中! \n', 'keepNonLatin', false, 'é 中! \n'],
  ['aé中١Ⅳ²! 😀e\u0301', 'keepNonLetterDigit', false, '! 😀\u0301'],
 ];
 for (const [input, mode, space, expected] of cases) {
  assert.equal(transform(input, mode, space).output, expected, mode);
 }
 assert.equal(transform('中😀', 'ascii').unmapped, 2);
});

test('fallback segmentation preserves em-dash expansion and combining accents', () => {
 const fallback = converter({});
 const text = 'cafe\u0301—😀';
 assert.deepEqual(fallback(text, 'ascii'), transform(text, 'ascii'));
});

test('empty input and literal markup are handled as text', () => {
 for (const mode of ['ascii', 'removeAccents', 'unicode', 'alnum', 'keepSpecial', 'keepNonLatin', 'keepNonLetterDigit']) {
  assert.equal(transform('', mode).output, '');
 }
 assert.equal(transform('<img src=x onerror=alert(1)>—', 'ascii').output, '<img src=x onerror=alert(1)>--');
});
