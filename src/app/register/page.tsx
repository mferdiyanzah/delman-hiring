"use client";

import React, { useState } from "react";
import { Button, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import { IFormInputs } from "./register.interface";
import useMutateUser from "@/hooks/useMutateUser";

const RegisterPage = () => {
  const [formFields, setFormFields] = useState<IFormInputs>({
    name: "",
    email: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { mutate } = useMutateUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: { [key: string]: string } = {};
    if (!formFields.name) {
      newErrors.name = "Name is required";
    }
    if (!formFields.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formFields.email)) {
      newErrors.email = "Email is not in a valid format";
    }

    if (Object.keys(newErrors).length === 0) {
      mutate(formFields);
      setFormFields({ name: "", email: "" });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <Stack>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        borderBottom="1px"
        borderBottomColor="gray.200"
      >
        User Registration
      </Text>
      <form onSubmit={handleSubmit}>
        <Stack w={80} p={4} direction="column" gap="4">
          <Stack mb="6">
            <FormLabel m="0">Name</FormLabel>
            <Input
              name="name"
              onChange={(e) => {
                setFormFields({ ...formFields, name: e.target.value });
                setErrors({ ...errors, name: "" });
              }}
            />
            {errors.name && <Text color="red.500">{errors.name}</Text>}
          </Stack>
          <Stack mb="6">
            <FormLabel m="0">Email</FormLabel>
            <Input
              name="email"
              type="email"
              onChange={(e) => {
                setFormFields({ ...formFields, email: e.target.value });
                setErrors({ ...errors, email: "" });
              }}
            />
            {errors.email && <Text color="red.500">{errors.email}</Text>}
          </Stack>
          <Button type="submit" background="blue.500" color="white">
            Register
          </Button>
        </Stack>
      </form>
    </Stack>
  );
};

export default RegisterPage;
