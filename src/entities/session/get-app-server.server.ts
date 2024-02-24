import { getServerSession } from 'next-auth'
import { nextAuthConfig } from './next-file-config'

export const getAppSessionServer = () => getServerSession(nextAuthConfig)
