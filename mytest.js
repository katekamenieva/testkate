import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://localhost:3000/`;

test('Save name button click', async t => {
    await t
    .typeText('#root > div > header > table > tr > td:nth-child(1) > div > input[type=text]', 'Just Another Kate')
    .click('#root > div > header > table > tr > td:nth-child(1) > div > button')

    .expect(Selector('#root > div > header > table > tr > td:nth-child(1) > div > marquee').innerText).eql('Welcome Just Another Kate');
});
