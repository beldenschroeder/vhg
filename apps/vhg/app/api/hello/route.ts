// export async function GET(request: Request) {
//   return new Response('Hello, from API!');
// }

import prisma from '@vhg/vhg-libs';
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  // console.log(prisma);
  // const feed = { 'name': 'test'};
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  // return {
  //   props: { feed },
  //   revalidate: 10,
  // };
  return NextResponse.json(feed);
}
