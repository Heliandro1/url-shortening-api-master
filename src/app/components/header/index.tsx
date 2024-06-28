import Image from 'next/image'
import { MobileMenu } from '../mobile-menu'

export const Header = () => {
  return (
    <header className="sticky top-0 flex flex-col items-center justify-center w-full">
        <Image src="/images/logo.svg" alt='logo' width={100} height={40} />
		<MobileMenu />
    </header>
  )
}
