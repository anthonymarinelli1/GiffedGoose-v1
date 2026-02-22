import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";

interface GiftRecommendationFormProps {
  onSubmit: (formData: FormData) => void;
  isLoading?: boolean;
}

export interface FormData {
  age: string;
  interests: string;
  occasion: string;
  relationship: string;
  budgetMin: string;
  budgetMax: string;
}

export default function GiftRecommendationForm({
  onSubmit,
  isLoading = false,
}: GiftRecommendationFormProps) {
  const [age, setAge] = useState("");
  const [interests, setInterests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [relationship, setRelationship] = useState("");
  const [budgetMin, setBudgetMin] = useState("");
  const [budgetMax, setBudgetMax] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      age,
      interests,
      occasion,
      relationship,
      budgetMin,
      budgetMax,
    });
  };

  return (
    <Card className="p-8 sticky top-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Find the Perfect Gift
        </h2>
        <p className="text-sm text-muted-foreground">
          Tell us about your recipient and we'll suggest personalized gifts
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="age" className="text-sm font-medium">
            Recipient's Age
          </Label>
          <Input
            id="age"
            type="number"
            placeholder="e.g., 28"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="bg-card"
            required
            data-testid="input-age"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="interests" className="text-sm font-medium">
            Interests & Hobbies
          </Label>
          <Textarea
            id="interests"
            placeholder="e.g., reading, hiking, photography, cooking"
            value={interests}
            onChange={(e) => setInterests(e.target.value)}
            className="bg-card resize-none min-h-[80px]"
            required
            data-testid="input-interests"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="occasion" className="text-sm font-medium">
            Occasion
          </Label>
          <Select value={occasion} onValueChange={setOccasion} required>
            <SelectTrigger
              id="occasion"
              className="bg-card"
              data-testid="select-occasion"
            >
              <SelectValue placeholder="Select an occasion" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="birthday">Birthday</SelectItem>
              <SelectItem value="anniversary">Anniversary</SelectItem>
              <SelectItem value="wedding">Wedding</SelectItem>
              <SelectItem value="engagement">Engagement</SelectItem>
              <SelectItem value="graduation">Graduation</SelectItem>
              <SelectItem value="baby-shower">Baby Shower</SelectItem>
              <SelectItem value="new-baby">New Baby</SelectItem>
              <SelectItem value="housewarming">Housewarming</SelectItem>
              <SelectItem value="retirement">Retirement</SelectItem>
              <SelectItem value="promotion">Promotion/New Job</SelectItem>
              <SelectItem value="christmas">Christmas</SelectItem>
              <SelectItem value="hanukkah">Hanukkah</SelectItem>
              <SelectItem value="diwali">Diwali</SelectItem>
              <SelectItem value="eid">Eid</SelectItem>
              <SelectItem value="valentines">Valentine's Day</SelectItem>
              <SelectItem value="mothers-day">Mother's Day</SelectItem>
              <SelectItem value="fathers-day">Father's Day</SelectItem>
              <SelectItem value="get-well">Get Well Soon</SelectItem>
              <SelectItem value="sympathy">Sympathy/Condolence</SelectItem>
              <SelectItem value="apology">Apology</SelectItem>
              <SelectItem value="thank-you">Thank You</SelectItem>
              <SelectItem value="congratulations">Congratulations</SelectItem>
              <SelectItem value="just-because">Just Because</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="relationship" className="text-sm font-medium">
            Relationship
          </Label>
          <Select value={relationship} onValueChange={setRelationship} required>
            <SelectTrigger
              id="relationship"
              className="bg-card"
              data-testid="select-relationship"
            >
              <SelectValue placeholder="Select relationship" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="spouse">Spouse/Partner</SelectItem>
              <SelectItem value="boyfriend">Boyfriend</SelectItem>
              <SelectItem value="girlfriend">Girlfriend</SelectItem>
              <SelectItem value="mother">Mother</SelectItem>
              <SelectItem value="father">Father</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="daughter">Daughter</SelectItem>
              <SelectItem value="son">Son</SelectItem>
              <SelectItem value="child">Child</SelectItem>
              <SelectItem value="sister">Sister</SelectItem>
              <SelectItem value="brother">Brother</SelectItem>
              <SelectItem value="sibling">Sibling</SelectItem>
              <SelectItem value="grandmother">Grandmother</SelectItem>
              <SelectItem value="grandfather">Grandfather</SelectItem>
              <SelectItem value="grandparent">Grandparent</SelectItem>
              <SelectItem value="granddaughter">Granddaughter</SelectItem>
              <SelectItem value="grandson">Grandson</SelectItem>
              <SelectItem value="grandchild">Grandchild</SelectItem>
              <SelectItem value="aunt">Aunt</SelectItem>
              <SelectItem value="uncle">Uncle</SelectItem>
              <SelectItem value="niece">Niece</SelectItem>
              <SelectItem value="nephew">Nephew</SelectItem>
              <SelectItem value="cousin">Cousin</SelectItem>
              <SelectItem value="best-friend">Best Friend</SelectItem>
              <SelectItem value="friend">Friend</SelectItem>
              <SelectItem value="close-friend">Close Friend</SelectItem>
              <SelectItem value="colleague">Colleague/Coworker</SelectItem>
              <SelectItem value="boss">Boss/Manager</SelectItem>
              <SelectItem value="employee">Employee</SelectItem>
              <SelectItem value="teacher">Teacher/Mentor</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="neighbor">Neighbor</SelectItem>
              <SelectItem value="roommate">Roommate</SelectItem>
              <SelectItem value="in-law">In-Law</SelectItem>
              <SelectItem value="step-parent">Step-Parent</SelectItem>
              <SelectItem value="step-sibling">Step-Sibling</SelectItem>
              <SelectItem value="acquaintance">Acquaintance</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium">Budget Range</Label>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="budgetMin" className="text-xs text-muted-foreground">
                Minimum ($)
              </Label>
              <Input
                id="budgetMin"
                type="number"
                placeholder="20"
                value={budgetMin}
                onChange={(e) => setBudgetMin(e.target.value)}
                className="bg-card"
                min="0"
                data-testid="input-budget-min"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="budgetMax" className="text-xs text-muted-foreground">
                Maximum ($)
              </Label>
              <Input
                id="budgetMax"
                type="number"
                placeholder="100"
                value={budgetMax}
                onChange={(e) => setBudgetMax(e.target.value)}
                className="bg-card"
                min="0"
                data-testid="input-budget-max"
              />
            </div>
          </div>
          <p className="text-xs text-muted-foreground">
            Leave blank for no budget limit
          </p>
        </div>

        <Button
          type="submit"
          className="w-full py-6 text-base font-semibold shadow-md"
          disabled={isLoading}
          data-testid="button-find-gifts"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Finding perfect gifts...
            </>
          ) : (
            "Find Gift Recommendations"
          )}
        </Button>
      </form>
    </Card>
  );
}
