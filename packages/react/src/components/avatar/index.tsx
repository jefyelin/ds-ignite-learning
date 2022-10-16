import { User } from 'phosphor-react'
import { ComponentProps } from 'react'
import { Container, Fallback, Image } from './styles'

export interface AvatarProps extends ComponentProps<typeof Image> {}

export function Avatar(props: AvatarProps) {
  return (
    <Container>
      <Image alt={props.alt} {...props} />
      <Fallback delayMs={600}>
        <User />
      </Fallback>
    </Container>
  )
}

Avatar.displayName = 'Avatar'
