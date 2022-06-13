import { Flex, Button, Stack } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from "../components/Form/Input";

type InputProps = {
  email: string;
  password: string;
};

//cria schema de validação 
const signInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function Home() {
  const { register, handleSubmit, formState } = useForm<InputProps>({
    resolver: yupResolver(signInFormSchema)
  });
  const { errors } = formState;

  const onSubmit: SubmitHandler<InputProps> = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("teste", data);
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        width="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
