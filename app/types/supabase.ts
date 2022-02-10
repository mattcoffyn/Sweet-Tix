/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/films": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.films.id"];
          created_at?: parameters["rowFilter.films.created_at"];
          title?: parameters["rowFilter.films.title"];
          description?: parameters["rowFilter.films.description"];
          length?: parameters["rowFilter.films.length"];
          rating?: parameters["rowFilter.films.rating"];
          release_date?: parameters["rowFilter.films.release_date"];
          shows?: parameters["rowFilter.films.shows"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["films"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** films */
          films?: definitions["films"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.films.id"];
          created_at?: parameters["rowFilter.films.created_at"];
          title?: parameters["rowFilter.films.title"];
          description?: parameters["rowFilter.films.description"];
          length?: parameters["rowFilter.films.length"];
          rating?: parameters["rowFilter.films.rating"];
          release_date?: parameters["rowFilter.films.release_date"];
          shows?: parameters["rowFilter.films.shows"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.films.id"];
          created_at?: parameters["rowFilter.films.created_at"];
          title?: parameters["rowFilter.films.title"];
          description?: parameters["rowFilter.films.description"];
          length?: parameters["rowFilter.films.length"];
          rating?: parameters["rowFilter.films.rating"];
          release_date?: parameters["rowFilter.films.release_date"];
          shows?: parameters["rowFilter.films.shows"];
        };
        body: {
          /** films */
          films?: definitions["films"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/profiles": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["profiles"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.profiles.id"];
          updated_at?: parameters["rowFilter.profiles.updated_at"];
          username?: parameters["rowFilter.profiles.username"];
          avatar_url?: parameters["rowFilter.profiles.avatar_url"];
          website?: parameters["rowFilter.profiles.website"];
        };
        body: {
          /** profiles */
          profiles?: definitions["profiles"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/screens": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screens.id"];
          created_at?: parameters["rowFilter.screens.created_at"];
          screen?: parameters["rowFilter.screens.screen"];
          seats?: parameters["rowFilter.screens.seats"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["screens"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** screens */
          screens?: definitions["screens"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screens.id"];
          created_at?: parameters["rowFilter.screens.created_at"];
          screen?: parameters["rowFilter.screens.screen"];
          seats?: parameters["rowFilter.screens.seats"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.screens.id"];
          created_at?: parameters["rowFilter.screens.created_at"];
          screen?: parameters["rowFilter.screens.screen"];
          seats?: parameters["rowFilter.screens.seats"];
        };
        body: {
          /** screens */
          screens?: definitions["screens"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/shows": {
    get: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shows.id"];
          created_at?: parameters["rowFilter.shows.created_at"];
          film?: parameters["rowFilter.shows.film"];
          screen?: parameters["rowFilter.shows.screen"];
          time?: parameters["rowFilter.shows.time"];
          date?: parameters["rowFilter.shows.date"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["shows"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** shows */
          shows?: definitions["shows"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shows.id"];
          created_at?: parameters["rowFilter.shows.created_at"];
          film?: parameters["rowFilter.shows.film"];
          screen?: parameters["rowFilter.shows.screen"];
          time?: parameters["rowFilter.shows.time"];
          date?: parameters["rowFilter.shows.date"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          id?: parameters["rowFilter.shows.id"];
          created_at?: parameters["rowFilter.shows.created_at"];
          film?: parameters["rowFilter.shows.film"];
          screen?: parameters["rowFilter.shows.screen"];
          time?: parameters["rowFilter.shows.time"];
          date?: parameters["rowFilter.shows.date"];
        };
        body: {
          /** shows */
          shows?: definitions["shows"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  films: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: text */
    title?: string;
    /** Format: text */
    description?: string;
    /** Format: integer */
    length?: number;
    /** Format: text */
    rating?: string;
    /** Format: date */
    release_date?: string;
    /** Format: uuid */
    shows?: string;
  };
  profiles: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: string;
    /** Format: timestamp with time zone */
    updated_at?: string;
    /** Format: text */
    username?: string;
    /** Format: text */
    avatar_url?: string;
    /** Format: text */
    website?: string;
  };
  screens: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /** Format: integer */
    screen?: number;
    /** Format: integer */
    seats?: number;
  };
  shows: {
    /**
     * Format: uuid
     * @description Note:
     * This is a Primary Key.<pk/>
     * @default extensions.uuid_generate_v4()
     */
    id: string;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: uuid
     * @description Note:
     * This is a Foreign Key to `films.id`.<fk table='films' column='id'/>
     */
    film?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `screens.id`.<fk table='screens' column='id'/>
     */
    screen?: number;
    /** Format: time without time zone */
    time?: string;
    /** Format: date */
    date?: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description films */
  "body.films": definitions["films"];
  /** Format: uuid */
  "rowFilter.films.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.films.created_at": string;
  /** Format: text */
  "rowFilter.films.title": string;
  /** Format: text */
  "rowFilter.films.description": string;
  /** Format: integer */
  "rowFilter.films.length": string;
  /** Format: text */
  "rowFilter.films.rating": string;
  /** Format: date */
  "rowFilter.films.release_date": string;
  /** Format: uuid */
  "rowFilter.films.shows": string;
  /** @description profiles */
  "body.profiles": definitions["profiles"];
  /** Format: uuid */
  "rowFilter.profiles.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.profiles.updated_at": string;
  /** Format: text */
  "rowFilter.profiles.username": string;
  /** Format: text */
  "rowFilter.profiles.avatar_url": string;
  /** Format: text */
  "rowFilter.profiles.website": string;
  /** @description screens */
  "body.screens": definitions["screens"];
  /** Format: bigint */
  "rowFilter.screens.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.screens.created_at": string;
  /** Format: integer */
  "rowFilter.screens.screen": string;
  /** Format: integer */
  "rowFilter.screens.seats": string;
  /** @description shows */
  "body.shows": definitions["shows"];
  /** Format: uuid */
  "rowFilter.shows.id": string;
  /** Format: timestamp with time zone */
  "rowFilter.shows.created_at": string;
  /** Format: uuid */
  "rowFilter.shows.film": string;
  /** Format: bigint */
  "rowFilter.shows.screen": string;
  /** Format: time without time zone */
  "rowFilter.shows.time": string;
  /** Format: date */
  "rowFilter.shows.date": string;
}

export interface operations {}

export interface external {}
