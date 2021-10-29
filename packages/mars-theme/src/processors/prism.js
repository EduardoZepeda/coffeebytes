import Code from './code'

const prismProcessor = {
  name: 'prism-processor',
  test: ({ node }) =>
    node.type === 'element' &&
    node.component === 'code' &&
    node.parent.component === 'pre' &&
    node.props?.className?.match(/language-/),
  processor: ({ node }) => {
    node.component = Code
    return node
  }
}

export default prismProcessor
