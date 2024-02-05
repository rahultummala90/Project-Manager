type SampleComponentProps = {
    testVariable: string;
};

export default function SampleComponent({
    testVariable,
}: SampleComponentProps) {
    return <div>{testVariable}</div>;
}
