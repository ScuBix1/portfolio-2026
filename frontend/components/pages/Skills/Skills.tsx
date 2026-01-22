type SkillsProps = {
  className?: string;
};

export default function Skills(props: SkillsProps) {
  const { className } = props;

  return <div className={className}></div>;
}
