import { GalleryVerticalEnd } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center gap-2">
            <a
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-6" />
              </div>
              <span className="sr-only">Acme Inc.</span>
            </a>
            <h1 className="text-center font-bold">Welcome! Embark on your event journey.</h1>
          </div>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                placeholder="Input Username"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Input Your Email"
                required

              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Input Your Password"
                required
              />
            </div>
            <a href="/dashboard"> {/* Change to anchor tag for navigation */}
              <Button 
                type="button" // Change to button type
                className="w-full"  
                style={{ backgroundColor: '#00B4D8', color: '#FFFFFF' }}
              >
                Login
              </Button>
            </a>
          </div>
          <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
            <span className="relative z-10 bg-background px-2 text-muted-foreground ">
              Or
            </span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
          <a href="/dashboard"> {/* Change to anchor tag for navigation */}
              <Button 
              type="button" // Change to button type

                variant="outline" 
                className="w-full border-2 border-[#00B4D8] text-[#00B4D8] rounded-2xl text-lg font-semibold py-3 bg-transparent"
              >
                Wallet Connect
              </Button>
            </a>
            <a href="/dashboard"> {/* Change to anchor tag for navigation */}
              <Button 
                type="button" // Change to button type
                variant="outline" 
                className="w-full border-2 border-[#00B4D8] text-[#00B4D8] rounded-2xl text-lg font-semibold py-3 bg-transparent"
              >
                Google
              </Button>
            </a>
          </div>
        </div>
      </form>
      <div className="text-center text-sm">
              Dont Have an Account??{" "}
              <a href="/register" className="underline underline-offset-4 text-[#00B4D8] font-semibold">
              Register Here!
              </a>
      </div>
    </div>
  )
}
