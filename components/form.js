import { Card } from 'material-ui/Card'
import TextField from 'material-ui/TextField'
import FurSelector from './furselector'

export default () => (
  <div className='form-container'>
    <Card>
      <TextField
        defaultValue='Default Value'
        floatingLabelText='Unicorn´s name'
      />
      <FurSelector />
    </Card>
    <style jsx>{`
      .form-container {
        width: 642px;
        height: 666px;
      }
    `}</style>
  </div>
)