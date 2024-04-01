import { useRouter } from 'vue-router'

interface INavigationItem {
  title: string
  path: string
}

export default function useNavigation() {
  const links: INavigationItem[] = [
    {
      title: 'Обо мне',
      path: '/#aboutMe',
    },
    {
      title: 'Скиллы',
      path: '/#summarySkills',
    },
    {
      title: 'Опыт работы',
      path: '/#workEsperience',
    },
    {
      title: 'Интересные проекты',
      path: '/#projectList',
    },
  ]

  const router = useRouter()

  const navigate = (link: string) => {
    router.push(link)
  }

  return { links, navigate }
}
