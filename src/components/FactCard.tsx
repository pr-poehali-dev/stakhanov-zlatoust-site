import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FactCardProps {
  title: string;
  description: string;
  year: string;
  category: string;
  icon: string;
}

const FactCard = ({
  title,
  description,
  year,
  category,
  icon,
}: FactCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-3xl">{icon}</span>
          <Badge variant="secondary" className="bg-red-100 text-red-800">
            {year}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-800 leading-tight">
          {title}
        </CardTitle>
        <Badge variant="outline" className="w-fit text-xs">
          {category}
        </Badge>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FactCard;
