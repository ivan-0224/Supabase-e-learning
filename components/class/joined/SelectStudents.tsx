"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Student } from "@/utils/types";
import { AvatarIcon } from "@/components/AvatarIcon";

export function SelectStudents({ people }: { people: Student[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPeople, setSelectedPeople] = useState<Student[]>([]);

  const filteredPeople = people.filter(
    (person) =>
      person.student_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.student_mail?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (person: Student) => {
    setSelectedPeople((prev) =>
      prev.some((p) => p.student_id === person.student_id)
        ? prev.filter((p) => p.student_id !== person.student_id)
        : [...prev, person]
    );
  };

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search Student... 🎯"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="max-w-sm"
      />
      <div className="w-full">
        <h2 className="text-lg font-semibold mb-2">Selected Students</h2>
        <ul className="flex gap-2 flex-wrap w-full">
          {selectedPeople.map((person) => (
            <li
              key={person.student_id}
              className="flex gap-2 border p-2 text-sm rounded-md items-center"
            >
              <AvatarIcon img={person.studentImg as string} />
              <span className="text-nowrap font-normal">
                {person.student_name}
              </span>
              <Button
                onClick={() => handleSelect(person)}
                className=" cursor-pointer"
              >
                Remove
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-4 items-center w-full">
        <div className="flex-1 overflow-x-scroll">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]">Select</TableHead>
                <TableHead>Img</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Group Number</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPeople.map((person) => (
                <TableRow key={person.student_id}>
                  <TableCell>
                    <Checkbox
                      checked={selectedPeople.some(
                        (p) => p.student_id === person.student_id
                      )}
                      onCheckedChange={() => handleSelect(person)}
                    />
                  </TableCell>
                  <TableCell>
                    <AvatarIcon img="" />
                  </TableCell>
                  <TableCell>{person.student_name}</TableCell>
                  <TableCell>{person.student_mail}</TableCell>
                  <TableCell>04</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
