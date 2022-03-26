import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.coach.create({
    data: {
      name: 'John Doe',
    },
  });

  await prisma.position.create({
    data: {
      name: 'QB',
    },
  });

  await prisma.position.create({
    data: {
      name: 'LLB',
    },
  });

  await prisma.athlete.create({
    data: {
      code: 1,
      name: 'Richard',
      position: {
        connect: {
          name: 'QB',
        },
      },
    },
  });
};

seed()
  .then(() => console.log('coaches created'))
  .catch((err) => console.error(err));
