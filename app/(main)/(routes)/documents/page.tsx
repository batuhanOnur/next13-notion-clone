"use client"

import Image from "next/image"
import { useUser } from "@clerk/clerk-react"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"

const DocumentPage = () => {

    const { user } = useUser()

    console.log("user", user)

    return (
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image 
                src="/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />

            <Image
                src="/empty-dark.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block" 
            />

            <h2 className="text-lg font-medium">
                Welcome to { user?.username }&apos;s Jotion
            </h2>

            <Button>
                <PlusCircle className="h-4 w-4 mr-2" />
                Create Note
            </Button>
        </div>
    )
}
 
export default DocumentPage;