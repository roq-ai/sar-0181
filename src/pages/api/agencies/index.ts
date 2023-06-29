import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { authorizationValidationMiddleware, errorHandlerMiddleware } from 'server/middlewares';
import { agencyValidationSchema } from 'validationSchema/agencies';
import { convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  switch (req.method) {
    case 'GET':
      return getAgencies();
    case 'POST':
      return createAgency();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getAgencies() {
    const data = await prisma.agency
      .withAuthorization({
        roqUserId,
        tenantId: user.tenantId,
        roles: user.roles,
      })
      .findMany(convertQueryToPrismaUtil(req.query, 'agency'));
    return res.status(200).json(data);
  }

  async function createAgency() {
    await agencyValidationSchema.validate(req.body);
    const body = { ...req.body };
    if (body?.tour?.length > 0) {
      const create_tour = body.tour;
      body.tour = {
        create: create_tour,
      };
    } else {
      delete body.tour;
    }
    const data = await prisma.agency.create({
      data: body,
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(authorizationValidationMiddleware(handler))(req, res);
}
