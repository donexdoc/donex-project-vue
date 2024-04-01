import { useRouter } from 'vue-router'

interface INavigationItem {
  title: string
  path: string
  icon?: string
}

export default function useNavigation() {
  const links: INavigationItem[] = [
    {
      title: 'Обо мне',
      path: '/#aboutMe',
      icon: 'mdi-account-tie',
    },
    {
      title: 'Скиллы',
      path: '/#summarySkills',
      icon: 'mdi-flash',
    },
    {
      title: 'Опыт работы',
      path: '/#workEsperience',
      icon: 'mdi-domain',
    },
    {
      title: 'Интересные проекты',
      path: '/#projectList',
      icon: 'mdi-bullseye-arrow',
    },
  ]

  const router = useRouter()

  const navigate = (link: string) => {
    router.push(link)
  }

  return { links, navigate }
}
