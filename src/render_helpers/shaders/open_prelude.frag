precision highp float;

#if defined(DEBUG_FLAGS)
uniform float niri_tint;
#endif

in vec2 niri_v_coords;
out vec4 niri_fragColor;
uniform vec2 niri_size;

uniform mat3 niri_input_to_geo;
uniform vec2 niri_geo_size;

uniform sampler2D niri_tex;
uniform mat3 niri_geo_to_tex;

uniform float niri_progress;
uniform float niri_clamped_progress;
uniform float niri_random_seed;

uniform float niri_alpha;
uniform float niri_scale;
uniform vec2 niri_window_size;
uniform vec2 niri_window_pos;
uniform float niri_is_tabbed;
uniform float niri_total_columns;
uniform float niri_windows_in_column;
uniform float niri_window_index_in_column;
uniform float niri_columns_in_workspace;
uniform float niri_column_index_in_workspace;
uniform vec2 niri_output_size;

