import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const workouts = [
  { date: "2023-06-01", type: "Strength", duration: "45 min", calories: 320 },
  { date: "2023-06-03", type: "Cardio", duration: "30 min", calories: 280 },
  { date: "2023-06-05", type: "HIIT", duration: "20 min", calories: 220 },
  { date: "2023-06-07", type: "Yoga", duration: "60 min", calories: 180 },
  { date: "2023-06-09", type: "Strength", duration: "50 min", calories: 350 },
];

const WorkoutHistory=()=> {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Workout History</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Duration</TableHead>
              <TableHead>Calories</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {workouts.map((workout) => (
              <TableRow key={workout.date}>
                <TableCell>{workout.date}</TableCell>
                <TableCell>{workout.type}</TableCell>
                <TableCell>{workout.duration}</TableCell>
                <TableCell>{workout.calories}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
export default WorkoutHistory