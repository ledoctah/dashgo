import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react';
import { useRouter } from 'next/dist/client/router';
import { createContext, useContext, useEffect } from 'react';

interface SidebarDrawerProviderContext {
  children: React.ReactNode;
}

type SidebarDrawerContextData = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderContext): JSX.Element {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    console.log('fecgou');
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = (): SidebarDrawerContextData =>
  useContext(SidebarDrawerContext);
