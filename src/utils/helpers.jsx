import StarIcon from '../assets/icons/StarIcon'
import NoStarIcon from "../assets/icons/NoStarIcon"
export function getStarts(count) {
    let yellow_count = count;
    let icons = []
    for (let i = 1; i <= 5; i++) {
        if (i <= yellow_count) {
            icons.push(<StarIcon />);
        } else {
            icons.push(<NoStarIcon />);
        }
    }
    return icons

}
