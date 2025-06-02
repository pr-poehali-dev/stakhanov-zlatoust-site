import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PersonCardProps {
  name: string;
  role: string;
  achievement: string;
  description: string;
  year: string;
}

const PersonCard = ({
  name,
  role,
  achievement,
  description,
  year,
}: PersonCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="text-center pb-3">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <CardTitle className="text-lg font-bold text-gray-800">
          {name}
        </CardTitle>
        <Badge
          variant="secondary"
          className="bg-gray-100 text-gray-700 w-fit mx-auto"
        >
          {role}
        </Badge>
      </CardHeader>
      <CardContent className="text-center">
        <div className="bg-red-50 rounded-lg p-3 mb-3">
          <div className="font-semibold text-red-800 text-sm">
            {achievement}
          </div>
          <div className="text-xs text-red-600">{year}</div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default PersonCard;
