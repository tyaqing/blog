import { Fence } from '@/../components/Fence'

import { heading } from './Heading.markdoc'
const nodes = {
  heading,
  document: {
    render: undefined,
  },
  th: {
    attributes: {
      scope: {
        type: String,
        default: 'col',
      },
    },
    render: (props) => <th {...props} />,
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String,
      },
    },
  },
}

export default nodes
