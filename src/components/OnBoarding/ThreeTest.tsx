import { useFrame } from '@react-three/fiber'
import { PerspectiveCamera, useTexture } from '@react-three/drei'
import { HandleThreeType } from './OnBoardingTemplate'
import { useRef } from 'react'
import { Mesh } from 'three'
import backgroundImage from '/src/components/OnBoarding/background2.png'

let i = 0
export default function ThreeTest({ color, x }: HandleThreeType) {
	const textures = useTexture({
		map: backgroundImage,
	})

	const ref = useRef<Mesh>(null!)
	const ref2 = useRef<Mesh>(null!)

	useFrame((_, delta) => {
		i += delta
		ref.current.rotation.x += 1 * delta
		ref.current.rotation.y += 0.5 * delta
		ref.current.position.y = 0.25 + 0.25 * Math.sin(i)
		ref.current.position.z = 0.01 * Math.sin(i * 5)
		ref.current.position.x = 0.01 * Math.sin(i * 7)
		ref.current.scale.x = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i) - Math.sin((1 / 4) * Math.PI),
		)
		ref.current.scale.y = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i) - Math.sin((1 / 4) * Math.PI),
		)
		ref.current.scale.z = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i) - Math.sin((1 / 4) * Math.PI),
		)
		ref2.current.rotation.x += 0.9 * delta
		ref2.current.rotation.y += 0.35 * delta
		ref2.current.position.y = 0.4 + 0.4 * Math.sin(i * 1.2)
		ref2.current.position.z = 0.025 * Math.sin(i * 6)
		ref2.current.position.x = 0.025 * Math.sin(i * 8)
		ref2.current.scale.x = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i * 1.2) - Math.sin((1 / 4) * Math.PI),
		)
		ref2.current.scale.y = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i * 1.2) - Math.sin((1 / 4) * Math.PI),
		)
		ref2.current.scale.z = Math.max(
			0,
			-Math.sin(-(1 / 4) * Math.PI + i * 1.2) - Math.sin((1 / 4) * Math.PI),
		)
	})
	return (
		<>
			<PerspectiveCamera
				position={[(x - 0.5) * 3, 0.3, 12]}
				fov={30}
				makeDefault
				rotation-y={(x - 0.5) * 1.4}
			/>
			<ambientLight intensity={0.25 + (1 - x)} />
			<pointLight position={[-7, 7, 10]} intensity={120} castShadow />
			<pointLight position={[70, 70, 15]} intensity={120} castShadow />
			<group position={[0, -0.2, 9.6]}>
				<mesh
					position={[0.55, -0.5, 0.45]}
					castShadow
					scale={[0.02, 1, 0.02]}
					rotation-x={-0.2}
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
				<mesh
					position={[-0.55, -0.5, 0.45]}
					castShadow
					scale={[0.02, 1, 0.02]}
					rotation-x={-0.2}
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
				<mesh
					position={[0.55, -0.5, -0.45]}
					castShadow
					scale={[0.02, 1, 0.02]}
					rotation-x={0.2}
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
				<mesh
					position={[-0.55, -0.5, -0.45]}
					castShadow
					scale={[0.02, 1, 0.02]}
					rotation-x={0.2}
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
				<mesh position={[0, -0.005, 0]} scale={[1.5, 0.01, 1]}>
					<boxGeometry />
					<meshStandardMaterial color={'#dcd0bc'} />
				</mesh>
				<mesh
					position={[0, 0, 0]}
					rotation-x={-Math.PI / 2}
					castShadow
					receiveShadow
				>
					<planeGeometry args={[1.5, 1]} />
					<meshStandardMaterial color={'#dcd0bc'} />
				</mesh>

				<mesh position={[0.5, 0.05 * (1 - x), 0]} castShadow>
					<cylinderGeometry
						args={[
							0.05 * (1 - x),
							0.03 * (1 - x),
							0.14 * (1 - x),
							13,
							1,
							false,
							0,
							2 * Math.PI,
						]}
					/>
					<meshStandardMaterial />
					<mesh ref={ref} position={[0, 0.4, 0]} castShadow receiveShadow>
						<icosahedronGeometry args={[0.1 * (1 - x), 0]} />
						<meshStandardMaterial color={'#ffffff'} />
					</mesh>
					<mesh ref={ref2} position={[0.02, 0.4, 0]} castShadow receiveShadow>
						<icosahedronGeometry args={[0.1 * (1 - x), 0]} />
						<meshStandardMaterial color={'#ffffff'} />
					</mesh>
				</mesh>

				<group
					position={[-0.6, x * 0.02 - 0.03, -0.3]}
					scale={[0.3 * x, 0.01 * x, 0.3 * x]}
					rotation-x={0}
				>
					<mesh rotation-y={0.2} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.35} position-y={1} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.3} position-y={2} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.25} position-y={3} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.22} position-y={4} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.24} position-y={5} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.14} position-y={6} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.2} position-y={7} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.19} position-y={8} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
					<mesh rotation-y={0.4} position-y={9} castShadow>
						<boxGeometry />
						<meshStandardMaterial color={'#d4d4d4'} />
					</mesh>
				</group>
			</group>
			<group position={[0, 0.2, 9.5]}>
				<mesh
					position={[0, 0, 0]}
					castShadow
					scale={[0.75, 0.5, 0.01]}
					rotation={[-0.15, 0, 0]}
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />

					<mesh
						position={[0, 0, (1 - x) * 0.8 + 0.2]}
						castShadow
						scale={[0.95, (1 - x) * 0.9, 0.5]}
						rotation={[0, 0, 0]}
					>
						<boxGeometry />
						<meshStandardMaterial color={'#000000'} />
						<mesh position-z={0.51}>
							<planeGeometry attach="geometry" />
							<meshBasicMaterial attach="material" map={textures.map} />
						</mesh>
					</mesh>

					<mesh
						position={[0, 0, x * 0.8 + 0.2]}
						castShadow
						scale={[0.95, x * 0.9, 0.5]}
					>
						<boxGeometry />
						<meshStandardMaterial color={'#000000'} />
					</mesh>
				</mesh>
				<mesh
					position={[0, -0.2, -0.01]}
					castShadow
					scale={[0.2, 0.4, 0.03]}
					rotation={[0, 0, 0]}
					receiveShadow
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
				<mesh
					position={[0, -0.4, 0]}
					castShadow
					scale={[0.25, 0.025, 0.25]}
					rotation={[0, 0, 0]}
					receiveShadow
				>
					<boxGeometry />
					<meshStandardMaterial color={'#d4d4d4'} />
				</mesh>
			</group>
			<group>
				<mesh
					position={[0, -1, 0]}
					rotation-x={-Math.PI / 2}
					receiveShadow={true}
				>
					<planeGeometry args={[200, 200]} />
					<meshPhongMaterial color={color} shininess={25} />
				</mesh>
				<mesh position={[-1.5, 0, 1]} receiveShadow={true} castShadow>
					<planeGeometry args={[200, 200]} />
					<meshPhongMaterial
						color={color}
						specular={'skyblue'}
						shininess={10}
					/>
				</mesh>
			</group>
		</>
	)
}
