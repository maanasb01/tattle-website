{
  "sksl": "// This SkSL shader is autogenerated by spirv-cross.\n\nfloat4 flutter_FragCoord;\n\nuniform vec2 u_resolution;\nuniform shader u_tex0;\nuniform half2 u_tex0_size;\nuniform shader u_tex1;\nuniform half2 u_tex1_size;\n\nvec4 fragColor;\n\nvec2 FLT_flutter_local_FlutterFragCoord()\n{\n    return flutter_FragCoord.xy;\n}\n\nvoid FLT_main()\n{\n    vec2 fragCoord = FLT_flutter_local_FlutterFragCoord();\n    vec2 st = FLT_flutter_local_FlutterFragCoord() / u_resolution;\n    vec4 maskColor = u_tex1.eval(u_tex1_size *  st);\n    vec4 imageColor = u_tex0.eval(u_tex0_size *  st + (vec2(maskColor.x) * 5.0));\n    fragColor = imageColor;\n}\n\nhalf4 main(float2 iFragCoord)\n{\n      flutter_FragCoord = float4(iFragCoord, 0, 0);\n      FLT_main();\n      return fragColor;\n}\n",
  "stage": 1,
  "target_platform": 2,
  "uniforms": [
    {
      "array_elements": 0,
      "bit_width": 32,
      "columns": 1,
      "location": 0,
      "name": "u_resolution",
      "rows": 2,
      "type": 10
    },
    {
      "array_elements": 0,
      "bit_width": 0,
      "columns": 1,
      "location": 1,
      "name": "u_tex0",
      "rows": 1,
      "type": 12
    },
    {
      "array_elements": 0,
      "bit_width": 0,
      "columns": 1,
      "location": 2,
      "name": "u_tex1",
      "rows": 1,
      "type": 12
    }
  ]
}