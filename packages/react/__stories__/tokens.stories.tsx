import { Center, For, Stack } from "../src"

export default {
  title: "Tokens",
}

export const Shadows = () => {
  return (
    <Stack spacing="6" padding="10">
      <For each={["xs", "sm", "lg", "xl", "2xl"]}>
        {(shadow) => (
          <Center
            shadow={shadow}
            width="400px"
            height="20"
            color="fg.subtle"
            borderRadius="md"
          >
            {shadow}
          </Center>
        )}
      </For>
    </Stack>
  )
}
