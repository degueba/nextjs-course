import {
  ButtonDefault,
  ButtonPlain,
  ButtonPrimary,
  ButtonSlim,
} from '@/components/ui/button/index'
import { c_blue } from '@/styles/colors'
import styled from 'styled-components'
import { ButtonOutlined } from '../../components/ui/button/index'
import styles from './styles.module.css'

export const CategoryGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 1em;

  > h2 {
    width: 100px;
    color: ${c_blue};
  }
`
export const CategoryGroupComponents = styled.div`
  display: flex;
  gap: 10px;
`

function DesignSystem() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Locke Bio Design System</h1>

      {/* BUTTONS */}
      <div className={styles.box}>
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
      </div>

      {/* TITLES */}
      <div className={styles.box}>
        <h1>Titles</h1>
        <CategoryGroup>
          <h2>Outlined</h2>
          <CategoryGroupComponents></CategoryGroupComponents>
        </CategoryGroup>
      </div>
    </div>
  )
}

export default DesignSystem
