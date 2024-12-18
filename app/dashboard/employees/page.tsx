import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { setTimeout } from 'timers/promises';
import { columns, Employee } from './columns';
import { DataTable } from '@/components/ui/data-table';

export default async function EmployeesPage() {
  await setTimeout(2000);

  const employees: Employee[] = [
    {
      id: 1,
      firstName: 'Alex',
      lastName: 'Harper',
      teamName: 'alpha',
      isTeamLeader: true,
      avatar: '/images/ah.jpg',
    },
    {
      id: 2,
      firstName: 'Lucas',
      lastName: 'Anderson',
      teamName: 'alpha',
      isTeamLeader: false,
    },
    {
      id: 3,
      firstName: 'Noah',
      lastName: 'Reed',
      teamName: 'alpha',
      isTeamLeader: false,
    },
    {
      id: 4,
      firstName: 'Sophia',
      lastName: 'Bell',
      teamName: 'canary',
      isTeamLeader: true,
      avatar: '/images/sb.jpg',
    },
    {
      id: 5,
      firstName: 'Emma',
      lastName: 'Mitchell',
      teamName: 'canary',
      isTeamLeader: false,
    },
    {
      id: 6,
      firstName: 'Olivia',
      lastName: 'Scott',
      teamName: 'canary',
      isTeamLeader: false,
    },
    {
      id: 7,
      firstName: 'Ava',
      lastName: 'Evans',
      teamName: 'delta',
      isTeamLeader: true,
    },
    {
      id: 8,
      firstName: 'Jackson',
      lastName: 'Carter',
      teamName: 'delta',
      isTeamLeader: false,
      avatar: '/images/jc.jpg',
    },
    {
      id: 9,
      firstName: 'Isabella',
      lastName: 'Hughes',
      teamName: 'delta',
      isTeamLeader: false,
    },
  ];
  return (
    <Card>
      <CardHeader>
        <CardTitle>Employees</CardTitle>
      </CardHeader>
      <CardContent>
        <DataTable columns={columns} data={employees} />
      </CardContent>
    </Card>
  );
}
