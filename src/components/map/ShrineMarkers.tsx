import { AdvancedMarker } from "@vis.gl/react-google-maps";
import { type Shrine } from "../../types/shrine";

type Props = {
    shrines: Shrine[]
    onSelect: (shrine: Shrine) => void
}

const ShrineMarkers = ({ shrines, onSelect }: Props) => {
    return (
        <>
            {shrines.map((shrine) => (
                <AdvancedMarker
                    key={shrine.id}
                    position={{ lat: shrine.lat, lng: shrine.lng }}
                    title={shrine.name}
                    onClick={() => onSelect(shrine)} />
            ))}
        </>)
}

export default ShrineMarkers

