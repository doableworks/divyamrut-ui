// import { NextResponse } from 'next/server';
// import { revalidatePath } from 'next/cache';

// export async function GET(request) {
//   // Extract the query parameters from the URL
//   const { searchParams } = new URL(request.url);
//   const path = searchParams.get('path');
//   const secret = searchParams.get('secret');

//   // Validate the secret token
//   if (secret !== process.env.MY_SECRET_TOKEN) {
//     return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
//   }

//   // Ensure the path parameter is provided
//   if (!path) {
//     return NextResponse.json({ message: 'Path is required' }, { status: 400 });
//   }

//   try {
//     // Revalidate the specified path
//     await revalidatePath(path);

//     return NextResponse.json({ message: `Successfully revalidated: ${path}` }, { status: 200 });
//   } catch (err) {
//     // Catch and log any errors
//     console.error('Error during revalidation:', err);
//     return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
//   }
// }


import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';

// Type for the query parameters
interface RequestQuery {
  path: string | null;
  secret: string | null;
}

// TypeScript version of the GET handler
export async function GET(request: Request) {
  // Extract the query parameters from the URL
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path');
  const secret = searchParams.get('secret');

  // Validate the secret token
  if (secret !== process.env.MY_SECRET_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  // Ensure the path parameter is provided
  if (!path) {
    return NextResponse.json({ message: 'Path is required' }, { status: 400 });
  }

  try {
    // Revalidate the specified path
    await revalidatePath(path);

    return NextResponse.json({ message: `Successfully revalidated: ${path}` }, { status: 200 });
  } catch (err: any) {
    // Catch and log any errors
    console.error('Error during revalidation:', err);
    return NextResponse.json({ message: 'Error revalidating', error: err.message }, { status: 500 });
  }
}
