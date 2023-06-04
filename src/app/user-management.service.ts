import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Observable, defer, delay } from 'rxjs';

// Simulate real api call:
function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  getUsers(): Observable<User[]> {
    return asyncData(users).pipe(delay(1000));
  }

  getUser(id: number): Observable<User | undefined> {
    return asyncData(users.find(u => u.id === id)).pipe(delay(1000));
  }
}

const users: User[] = [
  {
    id: 1,
    name: 'Jascha Zittel',
    phoneNumber: '0898989327',
    role: 'Administrator',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 2,
    name: 'Oliver Jake',
    phoneNumber: '0898989327',
    role: 'User',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 3,
    name: 'Jack Connor',
    phoneNumber: '0898989327',
    role: 'User',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 4,
    name: 'Harry Callum',
    phoneNumber: '0898989327',
    role: 'Contributor',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 5,
    name: 'Charlie Kyle',
    phoneNumber: '0898989327',
    role: 'Manager',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 6,
    name: 'Joe Ethan',
    phoneNumber: '0898989327',
    role: 'Manager',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 7,
    name: 'Michael Richard',
    phoneNumber: '0898989327',
    role: 'User',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 8,
    name: 'Oscar Rhys',
    phoneNumber: '0898989327',
    role: 'Owner',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 9,
    name: 'Charlie James',
    phoneNumber: '0898989327',
    role: 'Editor',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 10,
    name: 'Amelia Margaret',
    phoneNumber: '0898989327',
    role: 'User',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 11,
    name: 'Emily Elizabeth',
    phoneNumber: '0898989327',
    role: 'Contributor',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 12,
    name: 'Olivia Patricia',
    phoneNumber: '0898989327',
    role: 'User',
    joinedDate: '2023-06-04T13:24:21Z',
  },
  {
    id: 13,
    name: 'Lily Michelle',
    phoneNumber: '0898989327',
    role: 'Owner',
    joinedDate: '2023-06-04T13:24:21Z',
  },
];
