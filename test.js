import * as string from './src.js';
import test from '../test/raw.js'


test.equal('titleCase', string.titleCase('cRAzy foX RUNS around the houSe'), 'Crazy Fox Runs Around The House')
test.equal('camelCase', string.camelCase('cRAzy foX RUNS around the houSe'), 'crazyFoxRunsAroundTheHouse')
// console.log('findGroups', "{{ATC|N02|BA01}} {{ATC|B01|AC06}} {{ATC|A01|AD05}}".findGroups(/{{(.*?)}}/g))
// console.log('blocks',`jewfasdf\r\n\r\nfajsdkadgf\nafsd\rfsadf\r\rasdjfkasdf`.blocks.map(x=>x.lines))