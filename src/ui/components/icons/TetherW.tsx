import type { IconProps } from "@chakra-ui/react"
import { Icon } from "@chakra-ui/react"
import { FC } from "react"

export const TetherW: FC<IconProps> = props => {
  return (
    <Icon viewBox="0 0 25 25" {...props}>
      <g fill="#fff" clipPath="url(#a)">
        <path d="M14.32 10.05v2.45c-.1 0-.66.06-1.78.06-.93 0-1.61-.04-1.84-.06v-2.45c-3.6.16-6.29.79-6.29 1.54s2.69 1.38 6.29 1.54c.23.01.89.04 1.82.04 1.17 0 1.7-.03 1.8-.04 3.59-.16 6.27-.79 6.27-1.54s-2.68-1.38-6.27-1.54Z" />
        <path d="M12.5 0C5.6 0 0 5.6 0 12.5S5.6 25 12.5 25 25 19.4 25 12.5 19.4 0 12.5 0Zm1.82 13.71v7.02H10.7v-7.02c-4.07-.19-7.14-.99-7.14-1.96s3.06-1.77 7.14-1.96V7.6H5.68V4.26h13.65V7.6h-5.01v2.19c4.07.19 7.12.99 7.12 1.96s-3.06 1.77-7.12 1.96Z" />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h25v25H0z" />
        </clipPath>
      </defs>
    </Icon>
  )
}
