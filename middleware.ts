import { authMiddleware } from "@clerk/nextjs";
 

export default authMiddleware({
  publicRoutes: [
    '/',
    '/about',
    '/diagnosis'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};