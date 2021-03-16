import * as string from './src.js';
import test from '../test/raw.js'


test.equal('titleCase', 'Crazy Fox Runs Around The House', string.titleCase('cRAzy foX RUNS around the houSe'))
test.equal('camelCase', 'crazyFoxRunsAroundTheHouse', string.camelCase('cRAzy foX RUNS around the houSe'))
test.equal('trim', 'ha|lo', string.trim('|ha|lo||', '|'))
test.equal('trim', 'mehr,davon', string.trim(',,mehr,davon,,,', ','))
test.equal('trim', 'Hallo', string.trim('. Hallo, ', ',;. '))
// console.log('findGroups', "{{ATC|N02|BA01}} {{ATC|B01|AC06}} {{ATC|A01|AD05}}".findGroups(/{{(.*?)}}/g))
// console.log('blocks',`jewfasdf\r\n\r\nfajsdkadgf\nafsd\rfsadf\r\rasdjfkasdf`.blocks.map(x=>x.lines))