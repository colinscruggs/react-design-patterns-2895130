import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    height: 100vh;
`;

const Pane = styled.div`
    display: flex;
    flex: ${props => props.weight};
    width: 100%;
    height: 100%;
    align-items: flex-start;
    justify-content: center;
`

export const SplitScreen = ({
    children,
    leftWeight = 1,
    rightWeight = 1
}) => {
    const [left, right] = children;

    return (
        <Container>
            <Pane weight={leftWeight} style={{ borderRight: '1px solid white' }}>
                {left}
            </Pane>
            <Pane weight={rightWeight} >
                {right}
            </Pane>
        </Container>
    );
}