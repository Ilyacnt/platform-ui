import { ToggleTheme } from '@/features/theme/toggle-theme'
import { Layout } from './ui/layout'
import { Logo } from './ui/logo'
import { MainNav } from './ui/main-nav'
import { Profile } from './ui/profile'

export function AppHeader({ variant }: { variant: 'auth' | 'private' | 'public' }) {
  const isProfile = variant !== 'auth'

  return (
    <Layout
      actions={<ToggleTheme />}
      logo={<Logo />}
      nav={<MainNav />}
      profile={isProfile && <Profile />}
    />
  )
}
