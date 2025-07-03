import { test, expect } from '@playwright/test';
import { ContactPage } from '../testObj/contact.po.js';
import contactData from '../fixtures/contact.fixtures.json';
import {LoginPage} from '../testObj/login.po.js';
import { access } from 'fs';
import { authenticateUser, createEntity } from '../utils/helper.spec.js';

test.beforeEach(async ({page}) => {
    const login = new LoginPage(page);
    await page.goto("/");
    await login.login("mynamebhujel12@gmail.com", "password");
    
})

test.describe('Valid contact tests', () => {
    test('Filling contact information', async ({ page })=> {
        const contact = new ContactPage(page);
        await contact.fillContact(contactData.validContact.firstName,
            contactData.validContact.lastName,
            contactData.validContact.email,
            contactData.validContact.city,
            contactData.validContact.streetaddress1,
            contactData.validContact.streetaddress2,
            contactData.validContact.country,
            contactData.validContact.phone,
            contactData.validContact.dob
        );
        
        await contact.validateContact(
            contactData.validContact.firstName,
            contactData.validContact.lastName,
            contactData.validContact.email,
            contactData.validContact.city,
            contactData.validContact.streetaddress1,
            contactData.validContact.streetaddress2,
            contactData.validContact.country,
            contactData.validContact.phone,
            contactData.validContact.dob
        )

    })
    test.only('Contact Edit tests', async ({ page, request }) => {
        const Data = {
            "firstName": "ayas",
            "lastName": "bhujel",
            "dob": "1998/02/10",
            "email": "bhujel42127@gmail.com",
            "phone": "9812987631",
            "streetaddress1": "helllp",
            "streetaddress2": "manytyyt",
            "city": "Pokhara",
            "country": "Nepal"
        };

        const contact = new ContactPage(page);
        const accessToken = await authenticateUser("mynamebhujel12@gmail.com", "password", { request });
        await createEntity(Data, accessToken, '/contacts', { request });
        page.reload();
        // await contact.viewContact();
        await contact.editContact(contactData.editContact.firstName);
        await contact.validateContact(contactData.editContact.firstName, contactData.editContact.lastName);
        // const id = await getEntity(accessToken, '/contacts', '200', { request });
        // await deleteEntity(accessToken, `/contacts/${id}`, { request });
        // await validateEntity(accessToken, `/contacts/${id}`, '404', { request });
    })
})
