import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import {
  NOBSCBackendAPIEndpointOne
} from '../../config/NOBSCBackendAPIEndpointOne';
import { ICuisine } from '../../store/data/types';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { CuisineView } from './CuisineView';

const endpoint = NOBSCBackendAPIEndpointOne;
const googleMapsAPIKeyTwo = 'AIzaSyA1caERqL2MD4rv2YmbJ139ToyxgT61v6w';

export function Cuisine({
  dataCuisines,
  oneColumnATheme
}: Props): JSX.Element {
  const history = useHistory();
  const { id } = useParams();

  const [ address, setAddress ] = useState("");
  const [ cuisine, setCuisine ] = useState<ICuisineDetail>();
  const [ latitude, setLatitude ] = useState("");
  const [ longitude, setLongitude ] = useState("");
  const [ nearbyStoresClicked, setNearbyStoresClicked ] = useState(false);
  const [ tab, setTab ] = useState("intro");

  useEffect(() => {
    if (!id) {
      history.push('/page/guide/food/cuisines');
      return;
    }

    const isCuisine = dataCuisines.find(c => c.cuisine_id === Number(id));

    if (!isCuisine) {
      history.push('/page/guide/food/cuisines');
      return;
    }

    const getCuisineDetail = async (id: number) => {
      const res = await axios.get(`${endpoint}/cuisine/detail/${id}`);
      if (res.data) setCuisine(res.data);
    };

    if (id && isCuisine) getCuisineDetail(Number(id));
  }, []);

  useEffect(() => {
    const getAddress = async () => {
      if (latitude === "") return;
      if (longitude === "") return;

      const res = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${googleMapsAPIKeyTwo}`
      );

      if (res.data) setAddress(res.data.results[3].formatted_address);
    };

    getAddress();
  }, [latitude, longitude]);

  const getLocation = async () => {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(function(position) {
      setLatitude(`${position.coords.latitude}`);
      setLongitude(`${position.coords.longitude}`);
    });
  };

  const handleShowNearbyStoresClick = () => {
    setNearbyStoresClicked(true);
    getLocation();
  };

  const handleTabChange = (value: string) => setTab(value);

  return !cuisine
  ? <LoaderSpinner />
  : (
    <CuisineView
      address={address}
      cuisine={cuisine}
      handleShowNearbyStoresClick={handleShowNearbyStoresClick}
      handleTabChange={handleTabChange}
      latitude={latitude}
      longitude={longitude}
      nearbyStoresClicked={nearbyStoresClicked}
      oneColumnATheme={oneColumnATheme}
      tab={tab}
    />
  );
}

export interface ICuisineDetail {
  cuisine_id: number;
  cuisine_name: string;
  cuisine_nation: string;
  cuisine_wiki: string;
  cuisine_intro: string;
  cuisine_equipment: ICuisineEquipment[];
  cuisine_ingredients: ICuisineIngredient[];
  cuisine_recipes: ICuisineRecipe[];
  cuisine_suppliers: ICuisineSupplier[];
}

interface ICuisineEquipment {
  equipment_id: number;
  equipment_name: string;
}

interface ICuisineIngredient {
  ingredient_id: number;
  ingredient_name: string;
}

interface ICuisineRecipe {
  recipe_id: number;
  title: string;
}

interface ICuisineSupplier {
  supplier_id: number;
  supplier_name: string;
}

interface RootState {
  data: {
    cuisines: ICuisine[];
  };
}

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {
  oneColumnATheme: string;
};

const mapStateToProps = (state: RootState) => ({
  dataCuisines: state.data.cuisines
});

const connector = connect(mapStateToProps, {});

export default connector(Cuisine);