import * as React from 'react'

interface State {
    itemText: string
}

type Props = {
    handleSubmit: (value: string) => void
    children: React.ReactNode
} & Partial<typeof todoInputDefaultProps>

const todoInputDefaultProps = {
    inputSetting: {
        maxlength: 20,
        placeholder: '请输入todo',
    }
}

export const createPropsGetter = <DP extends object>(defaultProps: DP) => {
    return <P extends Partial<DP>>(props: P) => {
        type PropsExcludingDefaults = Omit<P, keyof DP>
        type RecomposedProps = DP & PropsExcludingDefaults

        return (props as any) as RecomposedProps
    }
}

const getProps = createPropsGetter(todoInputDefaultProps)

export class TodoInput extends React.Component<Props, State> {

    public static defaultProps = todoInputDefaultProps

    constructor(props: Props) {
        super(props)
        this.state = {
            itemText: ''
        }
    }

    public render() {
        const { itemText } = this.state
        const { updateValue, handleSubmit } = this
        const { inputSetting } = getProps(this.props)

        return (
            <form onSubmit={handleSubmit} >
                <input maxLength={inputSetting.maxlength} type='text' value={itemText} onChange={updateValue} />
                <button type='submit' >添加todo</button>
            </form>
        )
    }

    private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
        this.setState({ itemText: e.target.value })
    }

    private handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        if (!this.state.itemText.trim()) {
            return
        }

        this.props.handleSubmit(this.state.itemText)
        this.setState({itemText: ''})
    }

}
