import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactInfoCard() {
  return (
    <Card className="w-full max-w-md mx-auto sm:max-w-full">
      <CardHeader>
        <CardTitle className="text-center sm:text-left">Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <Phone className="h-5 w-5 mb-1 sm:mr-3 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium">Phone</p>
            <p className="text-muted-foreground">(+62) 81296238548</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <Mail className="h-5 w-5 mb-1 sm:mr-3 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium">Email</p>
            <p className="text-muted-foreground break-words">fauzansiswantoro@gmail.com</p>
          </div>
        </div>

        <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
          <MapPin className="h-5 w-5 mb-1 sm:mr-3 text-muted-foreground flex-shrink-0" />
          <div>
            <p className="font-medium">Address</p>
            <p className="text-muted-foreground">
              Jl. Pancawarga I<br />
              Jatinegara<br />
              Jakarta Timur, 13410
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
