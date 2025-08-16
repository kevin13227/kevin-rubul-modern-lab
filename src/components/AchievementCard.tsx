interface AchievementCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const AchievementCard = ({ title, description, icon }: AchievementCardProps) => {
  return (
    <div className="group p-6 rounded-lg glass border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 section-glow">
      {icon && (
        <div className="mb-4 gradient-icon group-hover:gradient-icon transition-colors duration-300">
          {icon}
        </div>
      )}
      <h4 className="text-lg font-semibold text-white mb-3 group-hover:gradient-text transition-all duration-300">
        {title}
      </h4>
      <p className="text-white/70 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default AchievementCard;