import * as AvatarRadix from '@radix-ui/react-avatar'

interface AvatarProps {
  imageUrl?: string | undefined
  userName?: string | undefined
}

export const Avatar = ({ imageUrl, userName }: AvatarProps) => {
  return (
    <AvatarRadix.Root>
      <AvatarRadix.Image
        className="w-12 h-12 object-contain rounded-full"
        src={imageUrl}
        alt={userName}
      />
      <AvatarRadix.AvatarFallback>
        {userName && userName[0].toUpperCase()}
      </AvatarRadix.AvatarFallback>
    </AvatarRadix.Root>
  )
}
