import { PageContent } from './PageContent'
import { PageLoadingContent } from './PageLoadingContent'
import { PageHeader } from './PageHeader'
import { PageTitle } from './PageTitle'
import { Page as PageComponent } from './Page'

type PageLayoutExportType = typeof PageComponent & {
    Header: typeof PageHeader
    Content: typeof PageContent
    LoadingContent: typeof PageLoadingContent
    Title: typeof PageTitle
}

const Page = PageComponent as PageLayoutExportType
Page.Header = PageHeader
Page.Content = PageContent
Page.LoadingContent = PageLoadingContent
Page.Title = PageTitle

export { Page }
