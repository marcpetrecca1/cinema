import { NextResponse } from "next/server";

export default function middleware(req) {
  const url = req.nextUrl.clone(); // clone the request url
  const { pathname } = req.nextUrl; // get pathname of request (e.g. /blog-slug)
  const hostname = req.headers.get("host"); // get hostname of request (e.g. demo.vercel.pub)
  //redirect all the requests to /home directory
   url.pathname = `/home`;
   return NextResponse.rewrite(url);
}
