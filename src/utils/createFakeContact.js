import { faker } from '@faker-js/faker';

export function createFakeContact() {
  return {
    name: faker.person.fullName(),
    phone: faker.phone.number(),
    email: faker.internet.email(),
    job: faker.person.jobTitle(),
  };
}
