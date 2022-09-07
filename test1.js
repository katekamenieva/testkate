import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`https://clever-visvesvaraya-ea608e.netlify.app/`;

test('Roll the dice button click', async t => {
    await t
	.click('#root > div > header > table > tr > td:nth-child(2) > button') 
	.expect(Selector('#root > div > header > table > tr > td:nth-child(2) > p').innerText).eql('You must roll the dice first');
});
