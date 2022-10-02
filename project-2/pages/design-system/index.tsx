import { Badge } from '@/components/ui/badges'
import {
  ButtonDefault,
  ButtonOutlined,
  ButtonPlain,
  ButtonPrimary,
  ButtonSlim,
} from '@/components/ui/button/index'
import { Title } from '@/components/ui/titles'
import { c_blue } from '@/styles/colors'
import styled from 'styled-components'

export const DesignSystemWrapper = styled.div`
  font-family: ${(props) => props.theme.fontFamily || 'Open Sans'};
  font-size: 14px;
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #303197;
  margin-bottom: 2em;
  box-shadow: 0px 1px 2px rgba(48, 49, 151, 0.05);
  max-width: 1200px;
  margin: 20px auto;
`

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1em;

  > h2:first-child {
    width: 100px;
    color: ${c_blue};
    font-size: 1em;
    margin-right: 20px;

    &::after {
      content: ':';
    }
  }
`

export const CategoryGroupComponents = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
`

function DesignSystem() {
  return (
    <DesignSystemWrapper>
      <h1 style={{ textAlign: 'center' }}>Locke Bio Design System</h1>

      {/* BUTTONS */}
      <Box>
        <h1>Buttons</h1>
        <CategoryGroup>
          <h2>Default</h2>
          <CategoryGroupComponents>
            <ButtonDefault disabled={true}>Button</ButtonDefault>
            <ButtonDefault>Button</ButtonDefault>
            <ButtonDefault>
              <span className="icon material-icons">face</span>
              Button
            </ButtonDefault>
            <ButtonDefault>
              Button
              <span className="icon material-icons">face</span>
            </ButtonDefault>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Large</h2>
          <CategoryGroupComponents>
            <ButtonDefault disabled={true} size={'large'}>
              Button
            </ButtonDefault>
            <ButtonDefault disabled={true}>
              Button
              <span className="icon material-icons">face</span>
            </ButtonDefault>
          </CategoryGroupComponents>
        </CategoryGroup>

        <CategoryGroup>
          <h2>Primary</h2>
          <CategoryGroupComponents>
            <ButtonPrimary>Button</ButtonPrimary>
            <ButtonPrimary>
              <span className="icon material-icons">face</span>
              Button
            </ButtonPrimary>
            <ButtonPrimary>
              Button
              <span className="icon material-icons">face</span>
            </ButtonPrimary>
          </CategoryGroupComponents>
        </CategoryGroup>

        <CategoryGroup>
          <h2>Slim</h2>
          <CategoryGroupComponents>
            <ButtonSlim>Button</ButtonSlim>
          </CategoryGroupComponents>
        </CategoryGroup>

        <CategoryGroup>
          <h2>Outlined</h2>
          <CategoryGroupComponents>
            <ButtonOutlined>Button</ButtonOutlined>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Plain</h2>
          <CategoryGroupComponents>
            <ButtonPlain disabled>Button</ButtonPlain>
            <ButtonPlain>Button</ButtonPlain>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Statuses</h2>
          <CategoryGroupComponents>
            <ButtonPlain status="success">Button</ButtonPlain>
            <ButtonDefault status="success">Button</ButtonDefault>
            <ButtonDefault status="warning">Button</ButtonDefault>
            <ButtonDefault status="error">Button</ButtonDefault>
          </CategoryGroupComponents>
        </CategoryGroup>
      </Box>

      {/* TITLES */}
      <Box>
        <h1>Titles</h1>
        <CategoryGroup>
          <h2>Headline 1</h2>
          <CategoryGroupComponents>
            <Title size={'extra-large'}>Title</Title>
            <Title size={'extra-large'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Headline 2</h2>
          <CategoryGroupComponents>
            <Title size={'large'}>Title</Title>
            <Title size={'large'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Subtitle 1</h2>
          <CategoryGroupComponents>
            <Title size={'small-large'}>Title</Title>
            <Title size={'small-large'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Subtitle 2</h2>
          <CategoryGroupComponents>
            <Title size={'large-medium'}>Title</Title>
            <Title size={'large-medium'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Body 1</h2>
          <CategoryGroupComponents>
            <Title size={'medium'}>Title</Title>
            <Title size={'medium'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Body 2</h2>
          <CategoryGroupComponents>
            <Title>Title</Title>
            <Title fontWeight={'bold'}>Title</Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>Caption</h2>
          <CategoryGroupComponents>
            <Title size={'small'}>Title</Title>
            <Title size={'small'} fontWeight={'bold'}>
              Title
            </Title>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>As</h2>
          <Title as={'h1'}>H1</Title>
          <Title as={'h2'}>H2</Title>
          <Title as={'h3'}>H3</Title>
          <Title as={'h4'}>H4</Title>
          <Title as={'h5'}>H5</Title>
          <Title as={'h6'}>H6</Title>
          <Title as={'span'}>SPAN</Title>
          <Title as={'p'}>P</Title>
          <Title as={'small'}>SMALL</Title>
        </CategoryGroup>
      </Box>

      {/* Badges */}
      <Box>
        <h1>Badges</h1>
        <CategoryGroup>
          <h2>By StatusColor</h2>
          <CategoryGroupComponents>
            <Badge statusColor="blue">Prescription pending</Badge>
            <Badge statusColor="green">Prescription issued</Badge>
            <Badge statusColor="red">Prescription cancelled</Badge>
            <Badge statusColor="yellow">Prescription expired</Badge>
            <Badge statusColor="purple">In review</Badge>
            <Badge statusColor="indigo">Modified 2 days ago</Badge>
            <Badge statusColor="pink">Badge</Badge>
            <Badge>Badge</Badge>
            <Badge statusColor="blue" disableBulletPoint={true}>
              Badge
            </Badge>
            <Badge statusColor="green" disableBulletPoint={true}>
              Badge
            </Badge>
          </CategoryGroupComponents>
        </CategoryGroup>
        <CategoryGroup>
          <h2>By Status</h2>
          <CategoryGroupComponents>
            <Badge status={'info'}>Badge</Badge>
            <Badge status={'success'}>Badge</Badge>
            <Badge status={'error'}>Badge</Badge>
            <Badge status={'warning'}>Badge</Badge>
            <Badge status={'default'}>Badge</Badge>
          </CategoryGroupComponents>
        </CategoryGroup>
      </Box>
    </DesignSystemWrapper>
  )
}

export default DesignSystem
